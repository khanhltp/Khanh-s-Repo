class Base_exception {
    public message: string;
    constructor (message: string) {
        this.message = message;
    }
}

class Invalid_username_exception extends Base_exception {}
class Invalid_password_exception extends Base_exception {}


class Account {
    public username: string;
    public password: string;
    constructor(username: string, password: string) {
        if (username.length < 8) {
            throw new Invalid_username_exception ("Username phải có trên 8 ký tự")

        }
        if (username.length > 15) {
            throw new Invalid_username_exception ("Username phải có dưới 15 ký tự")
        }
        if (!username.includes("@")) {
            throw new Invalid_username_exception ("Username phải chứa ký tự @")
        }
        if (password.length < 8) {
            throw new Invalid_password_exception ("Password phải có trên 8 ký tự")
        }
        if (password.length > 15) {
            throw new Invalid_password_exception ("Password phải có dưới 15 ký tự")
        }
        if (!/[A-Z]/.test(password)) {
            throw new Invalid_password_exception ("Password phải chứa ký tự viết hoa")
        }

        this.username = username;
        this.password = password;
    }
}

class Account_list {
    public accounts: Account[];
    constructor(acounts: Account[]) {
        this.accounts = acounts;
    }
}


let valid_accounts = new Account_list(
    [
    new Account("Test12345678@1", "Test12345678@1"),
    new Account("Test12345678@2", "Test12345678@2"),
    new Account("Test12345678@3", "Test12345678@3")
]
)

let login = document.getElementById("login");

login?.addEventListener('click', function (e) {
    e.preventDefault();

    let username_element = <HTMLInputElement>document.getElementById("username");
    let username = username_element.value;
    let invalid_username = <HTMLInputElement>document.getElementById('invalid_username');
    invalid_username?.style.setProperty("display", "none");

    let password_element = <HTMLInputElement>document.getElementById("password");
    let password = password_element.value;
    let invalid_password = <HTMLInputElement>document.getElementById('invalid_password');
    invalid_password?.style.setProperty("display", "none");

    let success_message = document.getElementById("login_success");
    success_message?.style.setProperty("display", "none");

    let fail_message = document.getElementById("login_fail");
    fail_message?.style.setProperty("display", "none");
    
    try {
        let user_account = new Account(username, password);
    } catch (e) {
        if (e instanceof Invalid_username_exception) {
            invalid_username?.style.setProperty("display","block");
            invalid_username.innerText = e.message;
        }
        if (e instanceof Invalid_password_exception) {
            invalid_password?.style.setProperty("display","block");
            invalid_password.innerText = e.message;
        }
        return;
    }
    
    for (let account of valid_accounts.accounts) {
        console.log(password, username,length)
        if (username == account.username && password == account.password) {
            return success_message?.style.setProperty("display", "block");
        }
        return fail_message?.style.setProperty("display", "block");
    }
})

