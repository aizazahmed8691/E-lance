import React from "react";
import UserHeader from "../components/userHeader.js";
import { Row, Col, Button, Form, Table, Container } from "react-bootstrap";
const Creategig2 = () => {
  return (
    <div>
      <UserHeader />
      <Container>
        <Form>
          <div className="gig2">
            <h3>Scope&Pricing</h3>
            <div className="gig2line"></div>
            <h5>Packages</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>Titles</th>
                  <th>BASIC</th>
                  <th>STANDARD</th>
                  <th>PREMIUM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={3}></td>
                  <td>
                    <Form.Control as="input" row={3} />
                  </td>
                  <td>
                    <Form.Control as="input" row={3} />
                  </td>
                 
                  <td>
                    <Form.Control as="input" row={3} />
                  </td>
                </tr>
                <tr>
                  
                  <td>
                    <Form.Control as="input" row={3} />
                  </td>
                
                  <td>
                    <Form.Control as="input" row={3} />
                  </td>
                  
                  <td>
                    <Form.Control as="input" row={3} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr>
                  <td>Number of Products</td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr>
                  <td>Number of Pages</td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr className="hkl">
                  <td>Design Customization</td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox1" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox2" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox3" />
                  </td>
                </tr>
                <tr className="hkl">
                  <td> Responsive Design</td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox4" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox5" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox6" />
                  </td>
                </tr>
                <tr className="hkl">
                  <td>Content Upload</td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox7" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox8" />
                  </td>
                  <td>
                    <Form.Check custom="true" type="checkbox" id="checkbox9" />
                  </td>
                </tr>
                <tr>
                  <td>Revisions</td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr className="hkl">
                  <td>Price</td>
                  <td>
                    <input type="number" step="5" max="10000" />$
                  </td>
                  <td>
                    <input type="number" step="5" max="10000" />$
                  </td>
                  <td>
                    <input type="number" step="5" max="10000" />$
                  </td>
                </tr>
                <tr>
                  <td colSpan={4}>
                    <Form.Group controlId="image">
                      <Form.Control
                        type="text"
                        placeholder="dsa"
                      ></Form.Control>
                      <Form.File
                        id="image-file"
                        label="chosse image"
                        custom="true"
                      />
                    </Form.Group>
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </Table>
            <Row>
              <Col sm="10">
                <Button type="reset" variant="success">
                  Cancle
                </Button>
                <Button type="submit" variant="success">
                  Save
                </Button>
              </Col>
            </Row>
            <br></br>
            <br></br>
          </div>
        </Form>
      </Container>
    </div>
  );
};
export default Creategig2;
