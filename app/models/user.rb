class User < ActiveRecord::Base
  attr_reader :password
  
  before_validation :ensure_session_token  
  validates :username, :password_digest, :session_token, presence: true
  validates :password, :length => { :minimum => 6, :allow_nil => true }
  validates :username, uniqueness: true
  
  has_many :boards, dependent: :destroy
    
  # session#create
  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    user.try(:is_password?, password) ? user : nil
  end
  
  # user#find_by_credentials
  def is_password?(unencrypted_password)
   BCrypt::Password.new(self.password_digest).is_password?(unencrypted_password)
  end
  
  def password=(unencrypted_password)
    if unencrypted_password.present?
      # creating this ivar allows us to perform validation check, but it will not be saved to the db, it will be hashed then saved
      @password = unencrypted_password
      self.password_digest = BCrypt::Password.create(unencrypted_password)
    end
  end
  
  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  # blacklist password_digest
  def as_json(options = {})
    super(options.merge({ except: :password_digest, include: :cards }))
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
