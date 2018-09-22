import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import duvar from '.././assets/img/duvar.png'
import duvar_2x from '.././assets/img/duvar@2x.png'

class Main extends Component {
  render () {
    return (
      <Row>
        <Col
          lg={{ size: 4, order: 1 }}
          md={{ order: 2 }}
          sm={{ order: 2 }}
          xs={{ order: 2 }}
        >
          <div className='intro-text'>
            <p>
              <span>YAY</span>
              , yaymaktan geliyor. Yüklemi emir kipinde kullanıyoruz. Bu belki nazikçe dürtmek istememizden kaynaklanıyor ya da umutlu bir isteğimizi ifade ediyor.
            </p>
            <p>
              <span>YAY</span>
              {' '}
              aynı zamanda bir objeyi tarif ediyor. Yayılacak şeylerin gerginliğini taşıyan, daha büyük bir şeyin potansiyelini hissettiren bir nesne.
            </p>
            <p>
              <span>POP, Publishing on Publishing</span>
              ’in yani
              {' '}
              <span>Yayıncılık Üzerine Yayın</span>
              ’ın kısaltması.
            </p>
            <p>
              <span>POP</span>
              {' '}
              aynı zamanda o ortaya çıkma anından bahsediyor, yapıcılıkla gelen o açılmanın sesi.
            </p>
          </div>
        </Col>
        <Col
          lg={{ size: 4, order: 1 }}
          md={{ order: 1 }}
          sm={{ order: 1 }}
          xs={{ order: 1 }}
        >
          <div className='center'>
            <a href='#'>
              <img src='https://via.placeholder.com/200x280' className='hero' />
              <img
                className='mx-auto img-fluid wall'
                src={duvar}
                srcSet={`${duvar}, 2x`}
                alt={duvar}
              />
            </a>
          </div>
        </Col>
        <Col
          lg={{ size: 4, order: 1 }}
          md={{ order: 2 }}
          sm={{ order: 2 }}
          xs={{ order: 2 }}
        >
          <div className='intro-text'>
            <p>
              <span>YAY-POP</span>
              {' '}
              tek sayı olarak kurgulanmış bir dergi, Onagöre tarafından İstanbul Tasarım Bienali’nin siparişi üzerine üretiliyor.
            </p>
            <p>
              İçeriğimizi sayfalara dizdikçe buraya koyacağız. Böylece
              {' '}
              <span>YAY-POP</span>
              {' '}
              6 haftalık bienal sürecinde kendini geliştiriyor olacak. Yazıların ve görsellerimizin ham halini görebileceğiniz editoryal odayı 
              <span>Yapı Kredi Kültür Sanat</span>
              'ta (İstiklal Cad. no 161) ziyaret edebilirsiniz, içeriğimizle oynayabilirsiniz. Etkinliklerimiz için lütfen
              {' '}
              <span>şuradaki</span>
              {' '}
              takvime bakın.
            </p>
            <p>
              Derginin güncel halini indirmek için soldaki kapağa ya da tek tek içerikleri indirmek için aşağıdaki sayfalara tıklayın.
            </p>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Main
