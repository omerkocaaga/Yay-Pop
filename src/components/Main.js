import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import duvar from '.././assets/img/duvar.png'
import duvar_2x from '.././assets/img/duvar@2x.png'

class Main extends Component {
  render () {
    const { isActive, menuType } = this.props
    return (
      <Row className='main-ctn'>
        {!isActive &&
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
          </Col>}
        {!isActive &&
          <Col
            lg={{ size: 4, order: 1 }}
            md={{ order: 1 }}
            sm={{ order: 1 }}
            xs={{ order: 1 }}
          >
            <div className='center'>
              <a href='#'>
                <img
                  src='https://via.placeholder.com/200x280'
                  className='hero'
                />
                <img
                  className='mx-auto img-fluid wall'
                  src={duvar}
                  srcSet={`${duvar}, 2x`}
                  alt={duvar}
                />
              </a>
            </div>
          </Col>}
        {!isActive &&
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
          </Col>}
        {isActive &&
          menuType === '' &&
          <Col lg={{ size: 4, order: 1, offset: 4 }}>
            <div className='center'>
              <a href='#'>
                <img
                  src='https://via.placeholder.com/200x280'
                  className='hero'
                />
                {/* <img
                  className='mx-auto img-fluid wall'
                  src={duvar}
                  srcSet={`${duvar}, 2x`}
                  alt={duvar}
                /> */}
              </a>
            </div>
          </Col>}
        {menuType === 'hakkinda' &&
          <Col lg={{ size: 6, offset: 4 }} className='about-ctn'>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
            <p>
              Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            </p>
          </Col>}
        {menuType === 'icindekiler' &&
          <Col lg={{ size: 6, offset: 4 }} className='about-ctn'>
            <p>Önsöz - 1</p>
            <p>Künye - 2</p>
            <p>Röportaj  - 7</p>
            <p>Makale - 25</p>
          </Col>}
        {menuType === 'kunye' &&
          <Col lg={{ size: 6, offset: 4 }} className='about-ctn'>
            <p>
              <div className='key'>
                Editörler
              </div>
              <div>
                Okay Karadayılar + Ali Taptık (Onagöre), Merve Ünsal
              </div>
            </p>
            <p>
              <div className='key'>
                Asistanlar
              </div>
              <div>
                Zeynep Karababa, Rana İncesoy
              </div>
            </p>
            <p>
              <div className='key'>
                Web Programlama
              </div>
              <div>
                Ömer Faruk Kocaağa
              </div>
            </p>
            <p>
              <div className='key'>
                Yazı Tipleri
              </div>
              <div>
                Odee - Erman Yılmaz
              </div>
              <div>
                Terminal Grotesque - Raphaël Bastide
              </div>
            </p>
          </Col>}
      </Row>
    )
  }
}

export default Main
