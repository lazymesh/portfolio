import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  education,
} from "../../contents";

export const Education = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Education | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Education </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {education.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.school}</th>
                      <td>{data.degree}</td>
                      <td>{data.from}</td>
                      <td>{data.to}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
