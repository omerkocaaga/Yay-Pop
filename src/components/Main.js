import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import duvar from '.././assets/img/duvar.png'
import duvar_2x from '.././assets/img/duvar@2x.png'
import onagore from '.././assets/img/onagore.png'
import onagore_2x from '.././assets/img/onagore@2x.png'
import onagore_white from '.././assets/img/onagore_white.png'
import onagore_white_2x from '.././assets/img/onagore_white@2x.png'
import tasarim from '.././assets/img/tasarim.png'
import tasarim_2x from '.././assets/img/tasarim@2x.png'
import okullar from '.././assets/img/okullar.png'
import okullar_2x from '.././assets/img/okullar@2x.png'

class Main extends Component {
  render () {
    const { isActive, menuType, isEnglish, isTurkish } = this.props
    return (
      <Row className='main-ctn'>
        {!isActive &&
          <Col
            lg={{ size: 4, order: 1 }}
            md={{ order: 2 }}
            sm={{ order: 2 }}
            xs={{ order: 2 }}
          >
            <div className='intro-text first-p'>
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
              <a href={process.env.PUBLIC_URL + '/pdf/yp.pdf'}>
                <img
                  src={process.env.PUBLIC_URL + '/img/yp_cover.png'}
                  srcSet={`${process.env.PUBLIC_URL + '/img/yp_cover.png'}, 2x`}
                  className='hero'
                  alt='cover'
                />
                <img
                  className='mx-auto img-fluid wall'
                  src={duvar}
                  srcSet={`${duvar_2x}, 2x`}
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
        {!isActive &&
          <Col
            lg={{ order: 3 }}
            md={{ order: 3 }}
            sm={{ order: 3 }}
            xs={{ size: 12, order: 3 }}
            className='logo-col'
          >
            <a href='http://onagore.com' className='onagore-st-ctn pt-5'>
              {!isActive && <span>Bir</span>}
              {menuType !== 'kunye' &&
                <img
                  className='img-fluid onagore'
                  src={onagore}
                  srcSet={`${onagore_2x}, 2x`}
                  alt='onagore'
                />}
              {menuType === 'kunye' &&
                <img
                  className='img-fluid onagore'
                  src={onagore_white}
                  srcSet={`${onagore_white_2x}, 2x`}
                  alt='onagore'
                />}
              {!isActive && <span>Projesi</span>}
            </a>
            <a className='onagore-st-ctn-x pt-5' href='https://iksv.org'>
              <img
                className='img-fluid onagore'
                src={tasarim}
                srcSet={`${tasarim_2x}, 2x`}
                alt='iksv'
              />
            </a>
            <a
              className='onagore-st-ctn-x pt-5'
              href='https://okullarokulu.iksv.org'
            >
              <img
                className='img-fluid onagore'
                src={okullar}
                srcSet={`${okullar_2x}, 2x`}
                alt='okullar okulu'
              />
            </a>
          </Col>}
        {isActive &&
          menuType === '' &&
          <Col lg={{ size: 4, order: 1, offset: 4 }}>
            <div className='center hid'>
              <a href={process.env.PUBLIC_URL + '/pdf/yp.pdf'}>
                <img
                  src={process.env.PUBLIC_URL + '/img/yp_cover.png'}
                  srcSet={`${process.env.PUBLIC_URL + '/img/yp_cover.png'}, 2x`}
                  className='hero'
                  alt='hero'
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
            {isTurkish &&
              <span>
                <p>
                  Biz Onagöre.
                </p>
                <p>
                  Yayıncı olmak istiyoruz.{' '}
                </p>
                <p>
                  Bu yüzden YAY POP’u yaptık. YAY POP yayıncılık üzerine bir yayın. Şimdilik tek sayı olarak kurgulanmış bir dergi.
                  {' '}
                </p>
                <p>
                  Yayıncılığı, önce tanıdıklarımıza, sonra onların tanıdıklarına sorarak öğrenmek iyi olur diye düşündük. Dergi, yayıncılığı öğrenirken sorduğumuz sorular etrafında şekillendi.
                  {' '}
                </p>
                <p>
                  Yayıncı olmak ne demek? Yayıncıyı bir iktidar figürü olarak mı görmeli, yoksa üretene yardımcı olan bir paydaş  mı? Yayıncılığın sınırları nedir? Ekonomisi nedir? Bağlılıkları ve bağımlılıkları nelerdir? Yayıncı nasıl olunur? Yayıncılığa nasıl başlanır? Yayıncılık ne zaman, hangi koşullarda bitirilir? Yayıncı olunup da farkında olmamak mümkün müdür?
                </p>
              </span>}
            {isEnglish &&
              <span>
                <p>
                  We are Onagöre.
                </p>
                <p>
                  We want to be publishers.
                </p>
                <p>
                  This is why we produced YAY POP. YAY POP is a publication on publishing. For now, it is a one-issue magazine.
                </p>
                <p>
                  We thought that it would make sense to ask people around us and then they would ask people they knew what publishing is. The magazine is shaped around the questions that we asked in the process of learning to be publishers.
                </p>
                <p>
                  What does it mean to be a publisher? Should we see the publisher as a figure of author, or are they stakeholders who help the producers? What are the boundaries of publishing? What is the economy of publishing? What are its dependencies and addictions? How do you become a publisher? How do you begin to be a publisher? How do you end being a publisher and under what circumstances? Is it possible to be a publisher and not know it?
                  {' '}
                </p>
              </span>}
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
              {isTurkish &&
                <span className='key'>
                  Editörler
                </span>}
              {isEnglish &&
                <span className='key'>
                  Editors
                </span>}
              <br />
              Okay Karadayılar + Ali Taptık (Onagöre), Merve Ünsal
            </p>
            <p>
              {isTurkish &&
                <span className='key'>
                  Asistanlar
                </span>}
              {isEnglish &&
                <span className='key'>
                  Asistants
                </span>}
              <br />
              Zeynep Karababa, Rana İncesoy
            </p>
            <p>
              {isTurkish &&
                <span className='key'>
                  Web Programlama
                </span>}
              {isEnglish &&
                <span className='key'>
                  Web Developer
                </span>}
              <br />
              Ömer Faruk Kocaağa
            </p>
            <p>
              {isTurkish &&
                <span className='key'>
                  Yazı Tipleri
                </span>}
              {isEnglish &&
                <span className='key'>
                  Typefaces
                </span>}
              <br />
              Odee - Erman Yılmaz<br />
              Terminal Grotesque - Raphaël Bastide
            </p>
          </Col>}
      </Row>
    )
  }
}

export default Main
