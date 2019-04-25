import * as Yup from 'yup';

Yup.addMethod(Yup.mixed, 'equalTo', function(ref, message) {
    const msg = message || '${path} should match ${ref.path}';
    return this.test('equalTo', msg, function (value) {
      let refValue = this.resolve(ref);
      return !refValue || !value || value === refValue;
    })
});

export const SingUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  username: Yup.string()
    .min(2, "Username should be longer")
    .max(20, "Username shouls be shorter")
    .required("Required"),
  password: Yup.string()
    .min(3, "Must be longer than 3 characters")
    .required("Required"),
  confirm_password: Yup.string()
    .equalTo(Yup.ref('password'), 'Passwords must match')
    .required('Required'),
});

export const SingInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .min(3, "Must be longer than 3 characters")
    .required("Required"),
});

export const EditProfileSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email Required"),
  username: Yup.string()
    .min(2, "Username should be longer")
    .max(20, "Username shouls be shorter")
    .required("Username Required"),
  old_password: Yup.string()
    .min(3, "Password must be longer than 3 characters"),
  new_password: Yup.string()
    .min(3, "Password must be longer than 3 characters"),
});