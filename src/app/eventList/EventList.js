import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import AppHeader from "../../components/AppHeader";
const axios = require("axios");

function EventPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        // "https://mulli.world/banto/getEventLists"
        "https://www.serverbatty.com/banto/getEventLists"
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  const dummyData = [
    {
      title: "선착순 이벤트!",
      description: "매일매일 999명에게 무료 쿠폰이!",
      address: "https://ewz0w.csb.app/",
      explanation: "적립가능"
    },
    {
      title: "선착순 이벤트!",
      description: "매일매일 999명에게 무료 쿠폰이!",
      address: "https://ewz0w.csb.app/",
      explanation: "적립가능"
    },
    {
      title: "선착순 이벤트!",
      description: "매일매일 999명에게 무료 쿠폰이!",
      address: "https://ewz0w.csb.app/",
      explanation: "적립가능"
    },
    {
      title: "선착순 이벤트!",
      description: "매일매일 999명에게 무료 쿠폰이!",
      address: "https://ewz0w.csb.app/",
      explanation: "적립가능"
    },
    {
      title: "선착순 이벤트!",
      description: "매일매일 999명에게 무료 쿠폰이!",
      address: "https://ewz0w.csb.app/",
      explanation: "적립가능"
    },

    {
      title: "친구 추천 이벤트",
      description: "친구를 추천하면 한달동안 무한 사용!",
      address: "https://ewz0w.csb.app/",
      explanation: "적립가능"
    },
    {
      title: "왜 이걸 몰랐지",
      description: "반토 웹사이트 방문시 2만원이 ㄷㄷㄷ",
      address: "https://ewz0w.csb.app/",
      explanation: "적립가능"
    }
  ];

  return (
    <>
      <AppHeader title="이벤트" description="반토에서 고객님께 드리는 이벤트" />
      <main className="banto_blackBackground_withAppHeader">
        {data.map(data => (
          <EventCard
            title={data.title}
            description={data.description}
            explanation={data.subTitle}
            address={data.detailURL}
          />
        ))}
      </main>
      <div className="banto_blackBottomMargin" />
    </>
  );
}

export default EventPage;
