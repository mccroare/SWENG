import React from 'react';
import BarChart from './BarChart';
let x = ''
let langs = []
const LanguageList = (props) => {
    if (props.langslist) {
        {
            var totalcount = Object.entries(props.langslist).map(([key, eachitem]) =>
                (eachitem)).reduce((pv, cv) => pv + cv, 0)
        }
        return (
            <div>
                <div>
                    {
                        Object.entries(props.langslist).map(([key, eachitem]) =>
                            <div>
                                <div key={key}>
                                    {key} - {Math.round((100 * eachitem) / totalcount)}%

              </div>
                                <div>{console.log(x = x + eachitem/totalcount + ',')}</div></div>)}
                </div>
                {console.log(x)}
                <div className='App-header'>
                <hr></hr>
                    <h1 class="font-weight-bold">Language Graph</h1>
                </div>
                <div>
                    <BarChart data={x.split(',')} size={[500, 500]} />
                    {x = ''}

                </div>
            </div>
        )
    } else { return null; }

};

export default LanguageList;
