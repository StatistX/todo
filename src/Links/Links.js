import React from 'react';
import { Link } from 'react-router-dom';
import * as styles from './styles';

const Links = () => {
  return (
    <styles.LinksWrapper>
      <styles.LinksContent>
        <ul>
          <li style={{border: '1px solid black', borderRadius: '5px', listStyleType: 'none', minWidth: '100px', padding: '10px'}}>
            <Link to='/todoapp'>TodoApp</Link>
          </li>
          <li style={{border: '1px solid black', borderRadius: '5px', listStyleType: 'none', minWidth: '100px', padding: '10px'}}>
            <Link to='/starwarsdb'>StarWarsDB</Link>
          </li>
          <li style={{border: '1px solid black', borderRadius: '5px', listStyleType: 'none', minWidth: '100px', padding: '10px'}}>
            <Link to='/other'>Other</Link>
          </li>
        </ul>
        
        
      </styles.LinksContent>
    </styles.LinksWrapper>
  )
}

export default Links;