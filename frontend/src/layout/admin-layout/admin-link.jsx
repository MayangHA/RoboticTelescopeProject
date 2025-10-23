import React from 'react';
import { Link } from '../../components/link';
import { useLocation } from 'react-router-dom';

/** @param {Parameters<typeof Link>[0]} param0 */
function AdminLink({ href, title, ...props }) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(href);

  return (
    <Link
      to={href}
      {...props}
      bg={isActive ? '#ffd100' : '#fffefaff'}
      color={isActive ? 'black' : 'black'}
      _hover={{
        bg: isActive ? '#ffd100' : '#ffd100',
      }}
    >
      {title}
    </Link>
  );
}

export default AdminLink;
