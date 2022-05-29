import classes from "./Loader.module.css";

const Loader = () => {
 
  return (
    <div  className={classes.container}>
      <img src="/loader.gif"  className={classes.spinnerBase} />
  </div>
  );
}

export default Loader;
