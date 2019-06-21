const components = {}
// components.register ~ form register
components.register = `
<section class="register-container">
<div class="form-container">
    <div class="logo">
        <span>Techkids Chat</span>
    </div>
    <div class="form-wrapper">
        <form>
            <div class="name-wrapper">
                <div class="input-wrapper">
                    <input type="text" name="first name" placeholder="First name">
                </div>
                <div class="input-wrapper">
                    <input type="text" name="last name" placeholder="Last name">
                </div>
            </div>
            <div class="input-wrapper">
                <input type="email" name="email" placeholder="Email">
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password">
            </div>
            <div class="input-wrapper">
                <input type="password" name="confirmPassword" placeholder="Confirm Password">
            </div>
            <div class="form-footer">
                <a href="#" onclick="init()">Already have an account? Login</a>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
</div>
</section>
`

components.login = `
<section class="login-container">
<div class="form-container">
    <div class="logo">
        <span>Login</span>
    </div>
    <div class="form-wrapper">
        <form>
            <div class="input-wrapper">
                <input type="email" name="email" placeholder="Email">
            </div>
            <div class="input-wrapper">
                <input type="password" name="password" placeholder="Password">
            </div>
        </form>
    </div>
    <div class="form-footer">
        <a href="#" onclick="to_register()">Not yet have an account? Register</a>
        <button type="submit">Login</button>
    </div>
</div>
</section>
`
