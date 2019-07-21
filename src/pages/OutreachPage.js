import {
  Badge,
  Card,
  CardBody,
  Col,
  Container,
  Row
} from "shards-react";
import React, { useEffect, useState } from 'react';

import Loading from '../components/Loading';
import PageTitle from '../components/PageTitle';
import axios from 'axios';

export const getOutreachMethod = (weatherType, temperature) => {
  if (temperature < 55 || weatherType === 'Rain') return (
    <Badge pill className={`card-post__category bg-danger`}>
      Call Customers
    </Badge>
  );
  else if (temperature < 75) return (
    <Badge pill className={`card-post__category bg-success`}>
      Email Customers
    </Badge>
  );
  else if (weatherType === "Clear") return (
    <Badge pill className={`card-post__category bg-primary`}>
      Text Customers
    </Badge>
  );
  else return (
    <Badge pill className={`card-post__category bg-secondary`}>
      Use your own discretion
    </Badge>
  );
};

export default function OutReachPage() {
  const initialState = {
    forecast: {},
    loading: true
  };

  const [forecast, setForecast] = useState(initialState);

  useEffect(() => {
    const getForecast = async () => {
      const { data } = await axios(`http://api.openweathermap.org/data/2.5/forecast?q=minneapolis,us&units=imperial&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`);

      setForecast(data);
    };

    getForecast();
  }, []);

  return forecast.loading ? (
    <Loading />
  ) : (
      <Container fluid className="main-content-container">
        <Row className="top-row py-2">
          <PageTitle title="Weather based outreach" id="title" />
        </Row>

        <Row id="row-0">
          {forecast.list.map((forecastItem, idx) => (
            <Col lg="2" md="6" sm="12" className="mb-4" key={idx}>
              <Card id={`forecast-card-${idx}`} small className="card-forecast-item">
                {getOutreachMethod(forecastItem.weather[0].main, forecastItem.main.temp)}
                <CardBody>
                  <h5 className="card-title">
                    {forecastItem.dt_txt}
                  </h5>
                  <h5 className="card-title">
                    {forecastItem.weather[0].main}
                  </h5>
                  <p className="card-text d-inline-block mb-3">{Math.round(forecastItem.main.temp)} F</p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
}