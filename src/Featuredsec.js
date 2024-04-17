import React from 'react'
import './Featuredsec.css'

const Featuredsec = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='Featured-sec-text mt-5'>Featured Product</h3>
          <div className='mt-4'>
            <ul class="nav justify-content-center nav-underline ">
              <li class="nav-item">
                <a style={{color:"black",}} class="nav-link  active" aria-current="page" href="#all">All</a>
              </li>
              <li class="nav-item">
                <a style={{color:"black",}}  class="nav-link " href="#vegetables">Vegetables</a>
              </li>
              <li class="nav-item">
                <a style={{color:"black",}}  class="nav-link" href="#fruitsnuts">Fruits & Nuts</a>
              </li>
              <li class="nav-item">
                <a style={{color:"black",}}  class="nav-link" href="#freshmeat">Fresh Meat</a>
              </li>
              <li class="nav-item">
                <a style={{color:"black",}}  class="nav-link" href="#oceanfoods">Ocean Foods</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featuredsec