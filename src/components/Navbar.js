import React, { useState } from 'react'
import {AppBar, Toolbar, IconButton, Typography, Drawer} from '@material-ui/core'
import { Menu, Person, PeopleAlt, Language, NotificationsNone } from '@material-ui/icons'

function Navbar() {
    const[open, setOpen] = useState(false)

    const handleDrawer = () => {
        setOpen(true)
    }
    return (
        <div>
            <AppBar style={{ background: '#bd0841' }} position='static'>
        <Toolbar>
          <IconButton onClick={handleDrawer} color='inherit' edge='start' aria-label='menu'>
            <Menu/>
          </IconButton>
          <Typography variant='h6'>
            Menu
          </Typography>
          <IconButton color='inherit' aria-label='account'>
            <Person/>
          </IconButton>
          <IconButton color='inherit' aria-label='feed'>
            <PeopleAlt/>
          </IconButton>
          <IconButton color='inherit' aria-label='worldwide'>
            <Language/>
          </IconButton>
          <IconButton color='inherit' aria-label='notifications'>
            <NotificationsNone/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer 
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
        >
        <div style={{ height : '100px', width : '250px'}}>
          <h3>This is a drawer</h3>
        </div>
      </Drawer>
        </div>
    )
}

export default Navbar
