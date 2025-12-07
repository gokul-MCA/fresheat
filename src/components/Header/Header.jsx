import {
  AccessTime,
  Add,
  ArrowRightAltRounded,
  Facebook,
  Instagram,
  LinkedIn,
  LocalGroceryStore,
  MenuBook,
  Search,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import styles from "./Header.module.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

function Header() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && phone) {
      localStorage.setItem("formData", JSON.stringify({ email, phone }));
      navigate("/data");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo_container}>
        <img src="/logo.svg" alt="" height={60} width="auto" />
      </div>

      <div className={styles.menu_container}>
        <div className={styles.menu_firstLine}>
          <div className={styles.time}>
            <AccessTime /> 09:00 am - 06:00 pm
          </div>
          <div className={styles.links}>
            Follow Us:
            <Facebook />
            <Twitter />
            <YouTube />
            <LinkedIn />
          </div>
        </div>

        <div className={styles.menu_secondLine}>
          <div className={styles.menu_buttons}>
            <button className={styles.menu_button}>
              Home <Add />
            </button>
            <button className={styles.menu_button}>
              About Us <Add />
            </button>
            <button className={styles.menu_button}>
              Shop <Add />
            </button>
            <button className={styles.menu_button}>
              Pages <Add />
            </button>
            <button className={styles.menu_button}>
              Blog <Add />
            </button>
            <button className={styles.menu_button}>
              Contacts Us
              <Add />
            </button>
          </div>
          <button
            className={styles.menu_orderNow}
            onClick={() => setOpen(true)}
          >
            Order Now <ArrowRightAltRounded />
          </button>
          <div className={styles.menu_items}>
            <Search />
            <LocalGroceryStore />
            <MenuBook />
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="draggable-dialog-title"
          >
            <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
              Form
            </DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                  <div className={styles.form_fields}>
                    <label htmlFor="email">Email id:</label>
                    <TextField
                      id="email"
                      label="example@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                      variant="outlined"
                      required
                    />
                  </div>
                  <div className={styles.form_fields}>
                    <label htmlFor="phone">Phone No:</label>

                    <TextField
                      id="phone"
                      label="98123 98123"
                      onChange={(e) => setPhone(e.target.value)}
                      variant="outlined"
                      required
                    />
                  </div>
                  <button type="submit" className={styles.submit}>
                    Submit
                  </button>
                </div>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              {/* <Button autoFocus onClick={handleSubmit}>
                  Submit
                </Button> */}
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Header;
