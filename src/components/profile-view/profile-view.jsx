import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Button, Col, Form, Row, Modal } from "react-bootstrap";

import "./profile-view.scss";

export const ProfileView = ({ user, token, setUser, movies }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);
  const [showModal, setShowModal] = useState(false);

  let favouriteMovies = movies.filter((movie) => {
    return user.FavouriteMovies.includes(movie._id); //or _id/Title?
  });

  let result = movies.filter((movie) =>
    user.FavouriteMovies.includes(movie._id)
  );

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };
    if (password) {
      data["Password"] = password;
    }

    fetch(`https://cineflix-sqlk.onrender.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          alert("Update failed.");
        }
      })
      .then((data) => {
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          setUser(data);
        }
      });
  };

  const handleDeleteUser = () => {
    fetch(`https://cineflix-sqlk.onrender.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        setUser(null);
        alert("Your account has been deleted");
      } else {
        alert("something went wrong.");
      }
    });
  };

  return (
    <>
      <h1 className="profile-page-title">Your profile</h1>
      <Row className="user-info">
        <Col xs={12} sm={6} className="user-input">
          <Form className="custom-form" onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername" className="form-group">
              <Form.Label>Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="form-group">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="form-group">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBirthday" className="form-group">
              <Form.Label>Birthday:</Form.Label>
              <Form.Control
                type="date"
                value={birthday.slice(0, 10)}
                onChange={(e) => setBirthday(e.target.value)}
                required
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col className="save-button">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Save changes
          </Button>
        </Col>
      </Row>

      <Row>
        <Col className="delete-button">
          <Button
            variant="link"
            className="text-danger"
            onClick={handleShowModal}
          >
            Delete my account
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <h3 className="favourite-title">Favourite movies</h3>
        </Col>
      </Row>
      <Row>
        {result.map((movie) => (
          <Col className="mb-5" key={movie._id} md={6}>
            <MovieCard 
              movie={movie}
              user={user}
              token={token}
              setUser={setUser}
            ></MovieCard>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Delete account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete your account permanantly?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleDeleteUser}>
            Yes
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            No
          </Button>
        </Modal.Footer>
      </Modal>

      {/* <Row className="favourite-movies">
        <Col>
          <h2>Favourite movies:</h2>
          {FavouriteMovies.map((movie) => (
            <Col key={movie._id} md={4}>
              <MovieCard movie={movie}></MovieCard>
            </Col>
          ))}
        </Col>
      </Row> */}
    </>
  );
};
