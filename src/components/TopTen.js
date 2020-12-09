import React, { useState, useEffect, useContext } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  UncontrolledCollapse,
} from "reactstrap";
import AppContext from "../Utilities/AppContext";
import { axiosHelper } from "../Utilities/axiosHelper";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  const history = useHistory();
  const {
    bearer,
    setName,
    name,
    setBearer,
    userid,
    setUserid,
    podcasts,
    setPodcasts,
  } = useContext(AppContext);

  function receivedPodcastInfo(data) {
    console.log(data);
    setPodcasts(data);
  }

  useEffect(() => {
    axiosHelper({
      method: "get",
      url: "http://goodlistens.herokuapp.com/podcasts",
      headers: {
        Accept: "application/json",
      },
      history,
      functionToRun: receivedPodcastInfo,
    });
  }, []);

  let topTen = podcasts.slice(0, 10);

  return (
    <div>
      <div className="container bg-secondary text-center rounded">
        <Button
          id="lunch"
          className="pt-4 bg-primary text-white border border-primary
            rounded mb-2"
          aria-expanded="false"
        >
          <h4>Here are the top 10 podcasts right now!</h4>
        </Button>
        <UncontrolledCollapse toggler="#lunch" className="collapse show">
          <Card className="bg-primary">
            <CardBody>
              <div className="col col-12 mx-auto rounded">
                {topTen.map((obj, i) => {
                  const foundListenData = obj.listens.find((i) => {
                    return i.user_id == userid;
                  });
                  return (
                    <div
                      key={i}
                      className="row justify-content-around pt-3 pb-3 bg-secondary border border-primary rounded my-auto"
                    >
                      <div className="col col-8 text-left pt-2 text-center text-primary">
                        <h6>
                          <strong>
                            {obj.id}. {obj.title}
                          </strong>
                        </h6>
                        {/* <div>{obj.info}</div> */}
                        <div className="row justify-content-around">
                          <div className="text-primary bg bg-white rounded pl-3 pr-3 mt-3 pb-1 text-right mb-1">
                            {obj.genre}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </div>
  );
}
