import React from 'react'
import PropTypes from 'prop-types'
import * as Recharts from 'recharts'
import '../App.css'

export default class Charts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getChartData();

    }

    getChartData = () => {
        let url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        let custHeaders = new Headers()
        let request = {
            method: 'GET',
            headers: custHeaders,
            mode: 'cors'
        }
        fetch(url, request)
            .then(response => response.json())
            .then(response => this.setState({ chartData: response }))
        console.log(this.state.chartData)
    }

    render() {
        const {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} = Recharts;
        const data = [
            { code: "USD", rate: "16,814.4625" },
            { code: "EUR", rate: "14,278.4212" },
            { code: "GBP", rate: "12,605.3149" }
        ]
        return (
            <div className="chart">
                <ResponsiveContainer>
                <AreaChart data={data}
                      margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                  <XAxis dataKey="code"/>
                  <YAxis/>
                  <CartesianGrid strokeLinejoin="miter"/>
                  <Tooltip/>
                  <Area type='monotone' dataKey='rate' stroke={'#8884d8'} fill={'#8884d8'} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
        )
    }
}

Charts.propTypes = {
    data: PropTypes.array
}