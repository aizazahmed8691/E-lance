import React from "react";
import UserHeader from "../components/userHeader.js";
import { Button, Form, Card, Col, Container, Row } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import { Autocomplete } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
const Creategig = () => {
    makeStyles((theme) => ({
        root: {
          '& > * + *': {
            marginTop: theme.spacing(9),
          },
        },
    }));
  return (
    <div className="mainnnnn">
      <UserHeader />
      <div className="creategigs">
        <Form>
          <Container>
            <Card style={{ width: "45rem" }}>
              <Card.Body>
                <Row className="bnm">
                  <Col sm="3">GIG TITILE</Col>
                  <Col className="bnm" sm="9">
                    <Form.Control placeholder="I WILL"></Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">CATEGORY</Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>Choose</option>
                        <option>Programming</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>Advance</option>
                        <option>Modrate</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">SERVICE TYPE</Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>FULL Website Creation</option>
                        <option>Customization</option>
                        <option>Bug Fix</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col sm="3">GIG METADATA</Col>
                  <Col sm="9" className="bnm">
                    <div className="tworowborder">
                      <Row>
                        <Col className="borderonerow" sm="3">
                          PLATFORM
                        </Col>
                        <Col sm="9">
                          Select the platform for which you provide services*
                        </Col>
                      </Row>
                      <Row>
                        <Col className="borderonerow" sm="3"></Col>
                        <Col className="radiobtn">
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="JavaScript"
                              />
                              <label htmlFor="radio1">JavaScript</label>
                            </Col>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="React"
                              />
                              <label htmlFor="radio1">React</label>
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="Nodejs"
                              />
                              <label htmlFor="radio1">Nodejs</label>
                            </Col>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="UIUX"
                              />
                              <label htmlFor="radio1">UIUX</label>
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="Python"
                              />
                              <label htmlFor="radio1">Python</label>
                            </Col>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="PHP"
                              />
                              <label htmlFor="radio1">PHP</label>
                            </Col>
                          </Row>
                          <br></br>
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="ASP.NET"
                              />
                              <label htmlFor="radio1">ASP.NET</label>
                            </Col>
                            <Col>
                              <input
                                type="radio"
                                id="other"
                                name="radio"
                                value="HTML"
                              />
                              <label htmlFor="radio1">HTML</label>
                            </Col>
                          </Row>
                          <br></br>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">SEARCH TAGS</Col>
                  <Col className="bnm">
                    {/* <Autocomplete
                      multiple={true}
                      id={'tags-filled'}
                      option={top10.map((option) => option.title)}
                      freeSolo
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            variant="outlined"
                            label={(option)}
                            {...getTagProps({ index })}
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          placeholder="Favorites"
                        />
                      )}
                    /> */}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Row>
              <Col sm="7">
                <Button variant="success" type="cancel">
                  Cancel
                </Button>
              </Col>
              <Col sm="4">
                <Button type="submit" variant="success">
                  Save
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </div>
  );
};
const top10 = [
  { title: "JavaScript", year: "1994" },
  { title: "React", year: "1999" },
  { title: "Nodejs", year: "1994" },
  { title: "UIUX", year: "1984" },
  { title: "Php", year: "1989" },
  { title: "Mern", year: "1995" },
];
export default Creategig;
