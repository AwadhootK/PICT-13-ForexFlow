import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const CurrencyChart = ({
  label,
  data,
  currencyName,
  startDate,
  endDate
  // selectedDuration
}) => {
  if (!label) {
    return 
  }
  const renderTooltip = value => [
    value,
    `Conversion Rate for 1 USD to ${currencyName}`
  ]

  // Filter data based on selected duration, start date, and end date
  // const filteredData = data.filter(dataPoint => {
  //   const dataDate = new Date(dataPoint.label)
  //   const startDateObj = new Date(startDate)
  //   const endDateObj = new Date(endDate)

  //   switch (selectedDuration) {
  //     case 'Weekly':
  //       const startOfWeek = new Date(startDate)
  //       const endOfWeek = new Date(endDate)
  //       return dataDate >= startOfWeek && dataDate <= endOfWeek
  //     case 'Monthly':
  //       return (
  //         dataDate.getFullYear() * 100 + dataDate.getMonth() + 1 >=
  //           startDateObj.getFullYear() * 100 + startDateObj.getMonth() + 1 &&
  //         dataDate.getFullYear() * 100 + dataDate.getMonth() + 1 <=
  //           endDateObj.getFullYear() * 100 + endDateObj.getMonth() + 1
  //       )
  //     case 'Quarterly':
  //       // Adjust this logic based on your specific definition of quarterly
  //       const startQuarter =
  //         Math.floor((startDateObj.getMonth() + 3) / 3) +
  //         startDateObj.getFullYear() * 10
  //       const endQuarter =
  //         Math.floor((endDateObj.getMonth() + 3) / 3) +
  //         endDateObj.getFullYear() * 10
  //       const dataQuarter =
  //         Math.floor((dataDate.getMonth() + 3) / 3) +
  //         dataDate.getFullYear() * 10
  //       return dataQuarter >= startQuarter && dataQuarter <= endQuarter
  //     case 'Yearly':
  //       return (
  //         dataDate.getFullYear() >= startDateObj.getFullYear() &&
  //         dataDate.getFullYear() <= endDateObj.getFullYear()
  //       )
  //     default:
  //       return true
  //   }
  // })

  const points = {}
  for (let i = 0; i < label.length; i++) {
    const dp =  {
      label: label[i],
      value: data[i]
    }
    points.push(dp)
  }

  console.log(points)

  return (
    <ResponsiveContainer width={700} height={212}>
      <LineChart data={points}>
        <XAxis dataKey='label' />
        <YAxis dataKey='value' />
        <Tooltip formatter={renderTooltip} />
        <Legend />
        <Line
          type='monotone'
          dataKey='value'
          stroke='rgb(102,195,172)'
          strokeWidth={2}
          name={`Conversion Rate for 1 USD to ${currencyName}`}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default CurrencyChart
