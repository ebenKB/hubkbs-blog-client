import Controller from '@ember/controller';

export default Controller.extend({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    password: '',

    actions: {
        signup() {
            console.log('this is the contact', this.contact)
            const user = {
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                contact: this.contact,
                password: this.password,
            }
           const created =this.store.createRecord('user', user);
           console.log(user)
           created.save();
        }
    },
    _checkPassword(pass1, pass2) {
        if (pass1 === pass2) {
            return true;
        } else {
            return false;
        }
    }
});
