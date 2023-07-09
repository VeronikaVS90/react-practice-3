import { StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/events">Events</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/search">Search</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};
