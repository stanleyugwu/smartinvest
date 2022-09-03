import React from 'react'
import { Link } from 'react-router-dom';
import moneyPlant from '../images/money_plant.svg';
import './PackageList.css';

const PackageList = () => {
  return (
    <div className="row ulockd-mrgn1260 mt-4" id="pkglist">
        <div className="col-xl-4 col-md-4 col-sm-4" style={{marginBottom: '5px', float: 'left'}}>
          <div className="card" style={{border:"1px solid #ccc"}}>
            <div className="card-content" style={{backgroundColor:"#305082"}}>
              <div className="card-body">
                <h2 className="card-title" style={{textAlign: 'center'}}><b>BASIC</b></h2>
              </div>
              <div className='d-block text-center'>
                <img alt='money' className="img-fluid" src={moneyPlant} style={{width: '100px', marginTop: '-20px'}} /><br />
                <h2>5% Daily Interest</h2>
              </div>
            </div>
            <ul className="list-group list-group-flush" style={{backgroundColor:"#305082"}}>
              <li className="list-group-item" style={{textAlign: 'center'}}>Minimum Deposit - $1,000</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Maximum Deposit - $10,000</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Risk Managements</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Standard Options</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Account manager</li>
            </ul>
            <div className="card-footer d-flex justify-content-between bg-white">
              <Link to="/purchase-contract" className="btn col-sm-12" style={{backgroundColor: '#339cff', color: 'white'}}>Purchase Contract</Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-4" style={{marginBottom: '5px', float: 'left'}}>
          <div className="card" style={{border:"1px solid #ccc"}}>
            <div className="card-content" style={{backgroundColor:"#305082"}}>
              <div className="card-body">
                <h2 className="card-title" style={{textAlign: 'center'}}><b>SILVER</b></h2>
              </div>
              <div className='text-center d-block'>
                <img alt='money' className="img-fluid" src={moneyPlant} style={{width: '100px', marginTop: '-20px'}} /><br />
                <h2>5% Daily Interest</h2>
              </div>
            </div>
            <ul className="list-group list-group-flush" style={{backgroundColor:"#305082"}}>
              <li className="list-group-item" style={{textAlign: 'center'}}>Minimum Deposit - $10,000</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Maximum Deposit - $50,000</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Risk Managements</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Standard Options</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Account manager</li>
            </ul>
            <div className="card-footer d-flex justify-content-between bg-white">
            <Link to="/purchase-contract" className="btn col-sm-12" style={{backgroundColor: '#339cff', color: 'white'}}>Purchase Contract</Link>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-4 col-sm-4" style={{marginBottom: '5px', float: 'left'}}>
          <div className="card" style={{border:"1px solid #ccc"}}>
            <div className="card-content" style={{backgroundColor:"#305082"}}>
              <div className="card-body">
                <h2 className="card-title" style={{textAlign: 'center'}}><b>GOLD</b></h2>
              </div>
              <div className='text-center d-block'>
                <img alt='money' className="img-fluid" src={moneyPlant} style={{width: '100px', marginTop: '-20px'}} /><br />
                <h2>5% Daily Interest</h2>
              </div>
            </div>
            <ul className="list-group list-group-flush" style={{backgroundColor:"#305082"}}>
              <li className="list-group-item" style={{textAlign: 'center'}}>Minimum Deposit - $50,000</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Maximum Deposit - UNLIMITED</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Risk Managements</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Standard Options</li>
              <li className="list-group-item" style={{textAlign: 'center'}}>Account manager</li>
            </ul>
            <div className="card-footer d-flex justify-content-between bg-white">
            <Link to="/purchase-contract" className="btn col-sm-12" style={{backgroundColor: '#339cff', color: 'white'}}>Purchase Contract</Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PackageList