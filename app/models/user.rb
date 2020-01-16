class User < ApplicationRecord
    has_secure_password #used to encrypt password digest field
    validates_presence_of :email
    validates_uniqueness_of :email
end
