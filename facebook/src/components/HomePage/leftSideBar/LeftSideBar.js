import React from 'react'
import './leftSideBar.css'
import SideBarOptions from './SideBarOptions/SideBarOptions'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function LeftSideBar({name}) {
  return (
    <div className="sideBar">
        <SideBarOptions title={name} src=" "/>
        <SideBarOptions title="Covid 19 Information Center" src="https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/s2nISXsbHvq.png"/>
        <SideBarOptions title="Friends" src="https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/Ry-XC4NrsPh.png"/>
        <SideBarOptions title="Groups" src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/HcPZuVUMsnD.png"/>
        <SideBarOptions title="Marketplace" src="https://static.xx.fbcdn.net/rsrc.php/v3/y3/r/SFSINTP9Buv.png"/>
        <SideBarOptions title="Events" src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/T7f1Ct6XGld.png"/>
        <SideBarOptions title="See More" Icon={ExpandMoreIcon}/>
    </div>
  )
}
