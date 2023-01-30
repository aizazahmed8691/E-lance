import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Form, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Slider from "./slider.js";
import SigninForm from "./signin.js";
import { makeStyles } from "@material-ui/core/styles"
import Modal from '@material-ui/core/Modal'
import Fade from '@material-ui/core/Fade'
import Backdrop from "@material-ui/core/Backdrop";

const useStyles=makeStyles((theme)=>({
  modal:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  paper:{
    backgroundColor:theme.palette.background.paper,
    border:'0px white',
    width:'30%',
    height:'40%',
    boxShadow:theme.spacing(2,4,3),
  },
}));


const Header = () => {
  const [ navbar, setNavbar ] = useState()
  const classes=useStyles();
  const [open, setOpen]=React.useState(false);
  const handleOpen=()=>{
    setOpen(true);
  };
  const handleClose=()=>{
    setOpen(false);
  }

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  return (
    <div>
      <div className={navbar ? "nn active" : "nn"}>
        <Row className='containerh'>
          <Col className='col1'>
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              color={navbar ? "black" : "white"}
              id="baricon"
            />
            <div className="nm">
              <div className={navbar ? "disactive" : "logo"}>
                <img alt="logo" src="images/Elogo.jpg"/>
                <div className="dot"></div>
              </div>
            </div>
            <div className={navbar ? "logo" : "disactive"}>
              <img alt="logo" src="images/mainlogo.png" />
            </div>
            <div className={navbar ? "searchBar" : "searchBar searchbarhide"}>
              <Form inline>
                <img
                  className="searchlogo"
                  alt="logo"
                  src="images/searchlogo.jpg"
                />
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-lg-0"
                />
                  <Button className="btnn">Search</Button>
              </Form>
            </div>
          </Col>
          <ul className="nvegation">
            <li className="ll">
              <a className={navbar ? 'linkcolor' : 'disactivecolor'} href="/">
                Elance Business
              </a>
            </li>
            <li className="sli">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                Explore
              </a>
            </li>
            <li className="sli">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                <span className="global">
                  <img
                    alt="logo"
                    color="green"
                    width="14px"
                    height="14px"
                    src="images/globe.jpg"
                  />
                </span>
                <span>English</span>
              </a>
            </li>
            <li className="tli">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                RsPKR
              </a>
            </li>
            <li className="tli">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                Become a Seller
              </a>
            </li>
            <li
              className={
                navbar ? "singinli linkcolor" : "singinli disactivecolor"
              } onClick={handleOpen}
            >
              Sign In
            </li>
            <li className="bli">
              <a href="/join">
                <Button variant="outline-success">Join</Button>{''}
              </a>
            </li>
          </ul>
        </Row>
      </div>
      <div>
        <Slider/>
      </div>
      <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout:500,
      }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <SigninForm/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Header;
