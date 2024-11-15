import Button from '../../components/Button/Button';
import Counter from '../../components/Counter/Counter';
import './styles.css';

function Lesson04() {
  const showMessage = ()=>{
    alert('Func outer click')
  }

  const showCustomMessage =(name)=>{
    alert(`Function outer click - ${name}`);
  }
  return (
    <div className='lesson04-wrapper'>
      <Counter/>
      <div className='buttons-wrapper'>
        {/* Пример 1 использование функции - создание функции внутри кнопки */}
        <Button
          name='Button with inner f'
          onClick={() => alert('Func inner')}
        />
        {/* Пример 2 использование функции - создание функции вне кнопки */}
        <Button name='Button with outer f' onClick={showMessage} />
        {/* Пример 3 использование функции - создание функции вне кнопки c параметрами */}
        <Button name='Button with parameters' onClick={()=>{showCustomMessage('Vera')}} />
      </div>
    </div>
  );
}

export default Lesson04;
