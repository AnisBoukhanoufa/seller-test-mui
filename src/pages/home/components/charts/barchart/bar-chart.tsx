import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import "./bar-chart.scss";
import { t } from "i18next";
import { useSelector } from "react-redux";

const Barchart = ({ type }: any) => {
  // const { t } = useTranslation();
  const ratesCount = useSelector(
    (state) => state.statistic.statistics.ratesCount
  );
  const data = [
    {
      name: ratesCount[0].name,
      value: ratesCount[0].value.toFixed(2),
      last30days: ratesCount[0].last30days.toFixed(2),
      color: "#00A808",
    },

    {
      name: ratesCount[1].name,
      value: ratesCount[1].value.toFixed(2),
      last30days: ratesCount[1].last30days.toFixed(2),
      color: "#E07E24",
    },

    {
      name: ratesCount[2].name,
      value: ratesCount[2].value.toFixed(2),
      last30days: ratesCount[2].last30days.toFixed(2),
      color: "#D87DA3",
    },

    {
      name: ratesCount[3].name,
      value: ratesCount[3].value.toFixed(2),
      last30days: ratesCount[3].last30days.toFixed(2),
      color: "#2970FF",
    },
  ];

  const barColors = ["#023e8a", "#023e8a", "#023e8a", "#023e8a"];
  return (
    <div className="barChart">
      <BarChart
        width={500}
        height={350}
        data={data}
        barGap={0}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 100]} />
        <Tooltip />

        <Bar dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
          ))}
        </Bar>
        <Bar dataKey="last30days" fill="#22b573" />
      </BarChart>
      <div className="options">
        {/* {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dots" style={{ backgroundColor: item.color }} />
              <span>{t(item.name)}</span>
            </div>
          </div>
        ))} */}

        <div className="option">
          <div className="title-bar-chart">
            <div className="dots" style={{ backgroundColor: "#5077ab" }} />
            <span>{t("last 30 days")}</span>
            <div className="dots" style={{ backgroundColor: "#22b573" }} />
            <span>{t("filter")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barchart;
