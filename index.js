const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt)
    console.log(salt)
    console.log(hash)
}

const login = async (pw, hashedPw) => {
    const res = await bcrypt.compare(pw, hashedPw)
    if (res) {
        console.log("Successfully logged in")
    } else {
        console.log("Password is incorrect")
    }
}
login('monkey', '$2b$10$PkVphxwJ0ON7T7SqBW25ruKeVEgbHk4U942OwWzPWFDkACDKwDsA6')
// hashPassword('monkey');