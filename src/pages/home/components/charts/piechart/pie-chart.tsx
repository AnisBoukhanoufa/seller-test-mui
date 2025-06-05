import { PieChart, Pie, Cell } from "recharts";
import "./pie-chart.scss";
import { EnumOrderStatus } from "statics/enums";
import { t } from "i18next";
import { useSelector } from "react-redux";

const Piechart = ({}) => {
  const statusCount = useSelector(
    (state) => state.statistic.statistics.statusCount
  );
  const list = [
    {
      name: t(EnumOrderStatus.inConfirmation),
      value: statusCount[EnumOrderStatus.inConfirmation],
      color: getComputedStyle(document.body).getPropertyValue(
        "--color-inConfirmation"
      ),
    },
    {
      name: t(EnumOrderStatus.wrong),
      value: statusCount[EnumOrderStatus.wrong],
      color: getComputedStyle(document.body).getPropertyValue("--color-wrong"),
    },
    {
      name: t(EnumOrderStatus.canceled),
      value: statusCount[EnumOrderStatus.canceled],
      color: getComputedStyle(document.body).getPropertyValue(
        "--color-canceled"
      ),
    },
    {
      name: t(EnumOrderStatus.confirmed),
      value: statusCount[EnumOrderStatus.confirmed],
      color: getComputedStyle(document.body).getPropertyValue(
        "--color-confirmed"
      ),
    },
    {
      name: t(EnumOrderStatus.dispatch),
      value: statusCount[EnumOrderStatus.dispatch],
      color: getComputedStyle(document.body).getPropertyValue(
        "--color-dispatched"
      ),
    },
    {
      name: t(EnumOrderStatus.delivered),
      value: statusCount[EnumOrderStatus.delivered],
      color: getComputedStyle(document.body).getPropertyValue(
        "--color-delivered"
      ),
    },
    {
      name: t(EnumOrderStatus.shipping),
      value: statusCount[EnumOrderStatus.shipping],
      color: getComputedStyle(document.body).getPropertyValue(
        "--color-shipping"
      ),
    },
    {
      name: t(EnumOrderStatus.returned),
      value: statusCount[EnumOrderStatus.returned],
      color: getComputedStyle(document.body).getPropertyValue(
        "--color-returned"
      ),
    },
    {
      name: t(EnumOrderStatus.expired),
      value: statusCount[EnumOrderStatus.expired],
      color: getComputedStyle(document.body).getPropertyValue(
        "--color-expired"
      ),
    },
    {
      name: t(EnumOrderStatus.inReturn),
      value: statusCount[EnumOrderStatus.inReturn],
      color: getComputedStyle(document.body).getPropertyValue("--color-return"),
    },
  ];
  // Calculate the total value of the list

  const total = list.reduce((total, item) => total + item.value, 0);

  var data = list.sort((a, b) => (a.value > b.value ? 1 : -1));

  data = [
    data[0],
    data[3],
    data[6],
    data[1],
    data[4],
    data[7],
    data[2],
    data[5],
    data[8],
    data[9],
  ];

  if (total === 0) {
    data.push({ name: "Nodata", value: 100, color: "#BDBDBD" });
  }

  // var filteredData = data ? data.filter((e) => e.value > 0) : [];
  // if (filteredData.length > 9) {
  //   filteredData = filteredData.map((e, index) => {
  //     if (index === 1) return filteredData[filteredData.length - 1];
  //     else if (index === 0) return filteredData[0];
  //     else return filteredData[index - 1];
  //   });
  // }
  // const COLORS = filteredData.map((e) => e.color);

  const sortedData = [...data]
    .filter((e) => e.value > 0)
    .sort((a, b) => a.value - b.value);

  const newData = [...sortedData];
  const len = sortedData.length;

  for (let i = 1; i < (len - 1) / 2; i = i + 2) {
    newData[i] = sortedData[len - 1 - i];
    newData[len - 1 - i] = sortedData[i];
  }
  const COLORS = newData.map((e) => e.color);

  return (
    <div className="pieChart">
      <PieChart width={250} height={300}>
        <Pie
          data={newData}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
          label={total === 0 ? false : true}
        >
          {newData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="options">
        {list.map((item) => (
          <div className="option" key={item.name}>
            <div className="title-chart">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{t(item.name)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Piechart;
