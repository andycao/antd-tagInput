import moment from "moment";
import { message } from "antd";

function fetchDdpInfo(
  url: string,
  startDate: moment.Moment,
  endDate: moment.Moment,
  processData: any
) {
  // check
  if (!moment.isMoment(startDate) || !moment.isMoment(endDate)) {
    return;
  }
  const params = {
    scene: 2,
    sensitive: {
      city_event: [
        {
          start_date: startDate.format("YYYY-MM-DD"),
          end_date: endDate.format("YYYY-MM-DD"),
        },
      ],
    },
  };

  fetch(url, {
    credentials: "include",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  })
    .then((resp) => resp.json())
    .then((resp) => {
      if (resp) {
        const { errno, data, errmsg } = resp;
        if (errno === 0) {
          processData && processData(data);
        } else {
          message.error(errmsg);
          processData && processData(data);
        }
      }
    })
    .catch((err) => {
      console.error("接口数据处理错误");
    });
}

export { fetchDdpInfo };
