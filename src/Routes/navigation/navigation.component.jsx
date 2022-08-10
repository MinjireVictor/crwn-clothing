import {useContext, Fragment } from 'react'
import {Outlet} from 'react-router-dom'
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import { NavigationContainer,
        LogoContainer,
      NavLinksContainer,
    NavLinks } from './navigation.styles'
import { UserContext } from '../../context/user.context'
import  {signOutUser} from '../../utils/firebase/firebase.utils'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'
import { CartContext } from '../../context/cart.context'


const Navigation = ()=>{
  const {currentUser}=useContext(UserContext)
  const {isCartOpen}=useContext(CartContext)
  
    return (
      <Fragment>
       
        <NavigationContainer>

            <LogoContainer to='/'>
            <CrwnLogo className='logo'/>
            </LogoContainer>
           
            <NavLinksContainer>
                <NavLinks to='/shop'>SHOP</NavLinks>
                {currentUser? <NavLinks as='span' onClick={signOutUser}>Sign Out</NavLinks>
                : <NavLinks to='/auth' >Sign In</NavLinks>}
                <CartIcon/>
            </NavLinksContainer>
            {isCartOpen && <CartDropdown/>}
            </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  }

  export default Navigation