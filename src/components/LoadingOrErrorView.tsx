import { Row, Result, Spin } from 'antd';

interface PropsComponent {
  error: any;
}

const LoadingOrErrorView = ({ error }: PropsComponent) => {
  return (
    <Row className='loadView' justify='center' align='middle'>
      {error ? (
        <Result
          status='404'
          title='No se pudo obtener el continente'
          subTitle='Lo lamento, por favor intente más tarde.'
        />
      ) : (
        <>
          <Spin size='large' />
          <h1>CARGANDO...</h1>
        </>
      )}
    </Row>
  );
};

export default LoadingOrErrorView;
