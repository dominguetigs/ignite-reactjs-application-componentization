import '../styles/header.scss';

interface HeaderProps {
  genre: string;
}

export function Header({ genre }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {genre}</span>
      </span>
    </header>
  );
}
