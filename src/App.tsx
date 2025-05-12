import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading title='Olá mundo do Componente Heading from children' />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
        accusantium velit, dignissimos eligendi repellat at doloremque magni
        aperiam, modi repudiandae quisquam recusandae perferendis voluptas fugit
        tempora deleniti. Facere, quod obcaecati.
      </p>
    </>
  );
}
