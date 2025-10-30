import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PasswordStrengthChecker from './comp/Password'
import StatePropsDemo from './comp/StatePropsDemo'
import TableWithPagination from './comp/TableWithPagination'
import PortalDemo from './comp/PortalDemo'
import Counter from './comp/Counter'
function App() {
  return (
    <div>
      <PasswordStrengthChecker />
      <StatePropsDemo />
      <TableWithPagination />
      <PortalDemo />
      <Counter />
    </div>
  );
}

export default App
