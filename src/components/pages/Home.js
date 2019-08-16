import React from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

import Footer from '../common/Footer'

const dateNumOptions = [
  { value: 0, label: 'All' },
  { value: 1, label: 'First Date' },
  { value: 2, label: 'Second Date' },
  { value: 3, label: 'Third Date' },
  { value: 4, label: 'Fourth Date' },
  { value: 5, label: 'Fifth Date' }
]

const actTypeOptions = [
  { value: '', label: 'All' },
  { value: 'Active', label: 'Active' },
  { value: 'Relaxing', label: 'Relaxing' },
  { value: 'Outdoors', label: 'Outdoors' }
]

const budgetOptions = [
  { value: 0, label: 'All' },
  { value: 1, label: 'Under £10' },
  { value: 2, label: '£10 - £25' },
  { value: 3, label: '£25 - £50' },
  { value: 4, label: '£50 - £100' },
  { value: 5, label: 'Over £100' }
]

class Home extends React.Component {
  constructor() {
    super()

    this.state = {}

  }

  render() {
    return (
      <section className="hero is-fullheight is-black">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-centered">Date Night</h1>
            <div className="level">
              <div className="level-item has-text-centered">
                <div className="field">
                  <label className="label">Date No.</label>
                  <Select
                    name="dateNum"
                    options={dateNumOptions}
                  />
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div className="field">
                  <label className="label">Activity Type</label>
                  <Select
                    name="actType"
                    options={actTypeOptions}
                    onChange={this.handleFilter}
                  />
                </div>
              </div>
              <div className="level-item has-text-centered">
                <div className="field">
                  <label className="label">Budget</label>
                  <Select
                    name="budget"
                    options={budgetOptions}
                  />
                </div>
              </div>
            </div>
            <h2 className="subtitle has-text-centered">
              <Link className="button is-large is-danger is-rounded" to={'/locations'}>Go</Link>
            </h2>
            <hr/>
            <h2 className="subtitle has-text-centered">
              <Link className="button is-large is-danger is-rounded" to={'/locations'}>Show me everything!</Link>
            </h2>
          </div>
        </div>
        <Footer />
      </section>
    )
  }
}

export default Home
