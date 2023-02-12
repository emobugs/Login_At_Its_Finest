import styles from './LoginForm.module.css';
const LoginForm = () => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="text" className={styles.label}>Type Your Name</label>
        <input type="text" name="text" id="text" className={styles.input}/>
      </div>
      <div>
        <label htmlFor="password" className={styles.label}>Type your Password</label>
        <input type="password" name="password" id="password" className={styles.input}/>
      </div>
      <button type="submit" className={styles.submit}>Submit</button>
    </form>
  );
};

export default LoginForm;
