import React from 'react';
import Card from './components/Card';

const App = () => {
  return (
    <div className="container py-5 bg-light">
      <div className="row g-4">
        
        <div className="col-md-4">
          <Card 
            imgSrc="https://bootstraptema.ru/_sf/67/33825047.jpg"
            title="Заголовок карточки"
            text="Это пример текста карточки. Здесь можно разместить описание или любую другую информацию."
          >
            <a href="#" className="btn btn-primary">Перейти</a>
          </Card>
        </div>

        <div className="col-md-4">
          <Card 
            title="Текстовая карточка"
            text="Пример карточки без изображения, содержащей только текстовое содержимое."
          >
            <a href="#" className="btn btn-outline-primary">Подробнее</a>
          </Card>
        </div>

        <div className="col-md-4">
          <Card 
            header="Заголовок"
            footer="2 дня назад"
            title="Особая карточка"
            text="Карточка с заголовком и нижним колонтитулом."
          />
        </div>

        <div className="col-md-4">
          <Card 
            bg="bg-primary"
            textColor="text-white"
            title="Цветная карточка"
            text="Пример карточки с цветным фоном и белым текстом."
          >
            <a href="#" className="btn btn-light">Действие</a>
          </Card>
        </div>

        <div className="col-md-8">
          <Card 
            horizontal={true}
            imgSrc="https://bootstraptema.ru/_sf/59/54144473.jpg"
            title="Горизонтальная карточка"
            text="Это более широкая карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому."
          >
             <p className="card-text"><small className="text-muted">Последнее обновление 3 минуты назад</small></p>
          </Card>
        </div>

      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2 className="mb-4">Группа карточек</h2>
          <div className="card-group">
            
            <Card 
              imgSrc="https://bootstraptema.ru/_sf/58/70519110.jpg"
              title="Карточка 1"
              text="Это карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому."
            >
              <p className="card-text"><small className="text-muted">Последнее обновление 3 минуты назад</small></p>
            </Card>

            <Card 
              imgSrc="https://bootstraptema.ru/_sf/61/54663564.jpg"
              title="Карточка 2"
              text="Эта карточка имеет поддерживающий текст ниже как естественный переход к дополнительному содержимому."
            >
              <p className="card-text"><small className="text-muted">Последнее обновление 3 минуты назад</small></p>
            </Card>

            <Card 
              imgSrc="https://bootstraptema.ru/_sf/67/88089205.jpg"
              title="Карточка 3"
              text="Это более широкая карточка с поддерживающим текстом ниже как естественный переход к дополнительному содержимому. Эта карточка имеет еще более длинный контент, чем первые две карточки."
            >
              <p className="card-text"><small className="text-muted">Последнее обновление 3 минуты назад</small></p>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
