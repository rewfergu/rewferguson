import React from 'react';
import Link from 'gatsby-link';
import Nav from '../components/Nav';

// import { rhythm } from 'typography';
import { css } from 'glamor';
// import '../../public/static/style.css';

class Work extends React.Component {
  constructor(props) {
    super(props);

    this.setWorkRef = element => {
      this.work = element;
    };
    this.setImageWindowRef = element => {
      this.imageWindow = element;
    };
  }

  showWindow = url => {
    this.imageWindow.style.height = this.work.offsetHeight + 'px';
    this.imageWindow.children[0].src = url;
    this.imageWindow.style.display = 'block';
    window.scrollTo(0, 0);
    this.imageWindow.classList.remove('fadeOut');
    this.imageWindow.classList.add('fadeIn');
  };
  imageWindowClick = () => {
    this.imageWindow.classList.add('fadeOut');
    this.imageWindow.classList.remove('fadeIn');
    var timer = window.setTimeout(function() {
      this.imageWindow.style.display = 'none';
      window.clearTimeout(timer);
    }, 500);
  };
  render() {
    return (
      <div className={wrapper} id="work" ref={this.setWorkRef}>
        <Nav />
        <main className="content" {...main}>
          <h1>RECENT WORK</h1>

          <article>
            <div className={media}>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm6.staticflickr.com/5584/29971956040_2b6c53f27d_k_d.jpg'
                  );
                }}
              >
                <img
                  src="https://farm6.staticflickr.com/5584/29971956040_2b6c53f27d_k_d.jpg"
                  alt="ACC Visual Communications Department - desktop view"
                />
              </a>

              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm8.staticflickr.com/7533/30183138961_0462db0166_o_d.png'
                  );
                }}
              >
                <img
                  src="https://farm8.staticflickr.com/7533/30183138961_56bbc25fdb_k_d.jpg"
                  alt="ACC Visual Communications Department - mobile view"
                />
              </a>
            </div>
            <section className={info}>
              <div>
                <h1>Visual Communications Department</h1>
                <h2>Role: Development</h2>
                <p>
                  The Visual Communications Department needed a WordPress theme
                  developed from a design mockup. HTML, CSS, JS and Php
                  templates were developed based on client specifications.{' '}
                </p>
              </div>
            </section>
          </article>

          <article>
            <div className={media}>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm4.staticflickr.com/3831/10577564176_6f65b00662_o_d.png'
                  );
                }}
              >
                <img
                  src="http://farm4.staticflickr.com/3831/10577564176_938d3828e2.jpg"
                  alt="ACC History Timearticlene - desktop view"
                />
              </a>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm8.staticflickr.com/7325/10577590264_f662018923_o_d.png'
                  );
                }}
              >
                <img
                  src="http://farm8.staticflickr.com/7325/10577590264_5aa29441f3.jpg"
                  alt="ACC History Timearticlene - mobile view"
                />
              </a>
            </div>
            <section className={info}>
              <div>
                <h1>ACC History Timeline</h1>
                <h2>Role: Design &amp; Development</h2>
                <p>
                  The college wanted an interactive timeline for users to
                  explore the events that led to its founding and growth in the
                  community.
                </p>
              </div>
            </section>
          </article>

          <article>
            <div className={media}>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm3.staticflickr.com/2809/10577042594_3b28649a29_o_d.jpg'
                  );
                }}
              >
                <img
                  src="http://farm3.staticflickr.com/2809/10577042594_aa3cacaabb.jpg"
                  alt="Specialized Signs"
                />
              </a>
            </div>
            <section className={info}>
              <div>
                <h1>Specialized Signs</h1>
                <h2>Role: Design &amp; Development</h2>
                <p>
                  ASL interpreters often have a difficult time with the
                  specialized vocabulary in some college courses. This site was
                  intended to be a database of "video flash cards" that
                  demonstrate course specific terms.{' '}
                </p>
              </div>
            </section>
          </article>
          <article>
            <div className={media}>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm4.staticflickr.com/3687/10577043434_8e65ef5106_o_d.png'
                  );
                }}
              >
                <img
                  src="http://farm4.staticflickr.com/3687/10577043434_96e885d606.jpg"
                  alt="Best Plus Self-Study Caarticlebration"
                />
              </a>
            </div>
            <section className={info}>
              <div>
                <h1>Best Plus Self-Study Calebration</h1>
                <h2>Role: Design &amp; Development</h2>
                <p>
                  This online evaluation was designed to give Faculty a more
                  consistent frame of reference when dealing with ESL (English
                  as Second Language) students. Faculty listen to the audio
                  sample and rate the piece on three factors: listening,
                  complexity, and communication.{' '}
                </p>
              </div>
            </section>
          </article>
          <article>
            <div className={media}>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm3.staticflickr.com/2878/10577346764_139ea9aa22_o_d.png'
                  );
                }}
              >
                <img
                  src="http://farm3.staticflickr.com/2878/10577346764_7c45e47be4.jpg"
                  alt="ACC RTF - desktop view"
                />
              </a>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm8.staticflickr.com/7372/10577454774_f9752ac89a_o_d.png'
                  );
                }}
              >
                <img
                  src="http://farm8.staticflickr.com/7372/10577454774_d8a6831bff_z.jpg"
                  alt="ACC RTF - mobile view"
                />
              </a>
            </div>
            <section className={info}>
              <div>
                <h1>ACC RTF Department</h1>
                <h2>Role: Design &amp; Development</h2>
                <p>
                  The Radio, Television and Film department at ACC needed a new
                  website that incorporated news and events more prominently and
                  showcased faculty and student work.
                </p>
              </div>
            </section>
          </article>
          <article>
            <div className={media}>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm4.staticflickr.com/3771/10576976115_362961a3ae_o_d.jpg'
                  );
                }}
              >
                <img
                  src="http://farm4.staticflickr.com/3771/10576976115_33c6fc03ab.jpg"
                  alt="ACC Faculty Coaches"
                />
              </a>
            </div>
            <section className={info}>
              <div>
                <h1>ACC Faculty Coaches</h1>
                <h2>Role: Design &amp; Development</h2>
                <p>
                  I was assigned to assist on a website that focused on the
                  Faculty Coaches component of the Student Success Initiative.
                </p>
              </div>
            </section>
          </article>
          <article>
            <div className={media}>
              <a
                onClick={() => {
                  this.showWindow(
                    'https://farm6.staticflickr.com/5548/10576976335_c74eeb4553_o_d.png'
                  );
                }}
              >
                <img
                  src="http://farm6.staticflickr.com/5548/10576976335_5e2f21fcef.jpg"
                  alt="Help for Distance Learning Students"
                />
              </a>
            </div>
            <section className={info}>
              <div>
                <h1>Help for Distance Learning Students</h1>
                <h2>Role: Design &amp; Development</h2>
                <p>
                  The Help for Distance Learning pages were intended to help
                  students with the transition to an online learning
                  environment.
                </p>
              </div>
            </section>
          </article>
          <article>
            <div className={media}>
              <div className="flex-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/do5auy3Bf_Y"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <section className={info}>
              <div>
                <h1>Campus Green Initiatives</h1>
                <h2>Role: Design and Animation</h2>
                <p>
                  The college needed a short video to promote green initiatives
                  on campus. I was provided the script and an audio track.
                </p>
              </div>
            </section>
          </article>

          <article>
            <div className={media}>
              <div className="flex-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/kKwORPZSrgI?list=PLoYjmGs7MFwLRnS1wCJbNjC3sUd8DkxDc"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
            <section className={info}>
              <div>
                <h1>WordPress Basics</h1>
                <h2>Role: Production and Post Production</h2>
                <p>
                  ACC has begun moving some older sites into the WordPress CMS.
                  Some clients were unfamiliar with the process, so I wrote and
                  produced these short videos as a basic intro into using the
                  software.
                </p>
              </div>
            </section>
          </article>

          <div
            className="imageWindow"
            id="imageWindow"
            ref={this.setImageWindowRef}
            onClick={this.imageWindowClick}
          >
            <img src="" />
          </div>
        </main>
      </div>
    );
  }
}

export default Work;

const wrapper = css({
  display: 'flex',
  '@media (max-width: 50em)': {
    display: 'block'
  },
  ' header': {
    display: 'block'
  }
});

const header = css({
  width: '300px',
  background: 'rgba(255, 255, 255, 0.7)',
  padding: '1.5rem',
  '@media (max-width: 50em)': {
    width: 'auto'
  }
});

const main = css({
  display: 'block',
  // margin: '0 auto',
  background: '#e6e6e6',
  padding: '1.5rem',
  '@media (max-width: 50em)': {
    width: 'auto'
  },
  ' > h1': {
    fontSize: '3.5vw',
    marginTop: 0,
    marginBottom: '1rem',
    '@media (max-width: 50em)': {
      fontSize: '1.55rem'
    }
  },
  ' article': {
    display: 'flex',
    '@media (max-width: 40rem)': {
      display: 'block'
    }
  }
});

const media = css({
  maxWidth: '40%',
  marginBottom: '2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  ' a': {
    display: 'block'
  },
  ' a:nth-child(2)': {
    marginLeft: '15px'
  },
  ' img': {
    maxWidth: '100%',
    border: '1px solid #ccc'
  },
  ' iframe': {
    width: '100%'
  },
  '@media (max-width: 40rem)': {
    width: 'auto'
  }
});

const info = css({
  width: '57%',
  marginLeft: '1rem',
  marginBottom: '2rem',
  '@media (max-width: 40rem)': {
    width: 'auto',
    marginLeft: 0
  },
  ' div': {
    background: 'rgba(255, 255, 255, 0.5)',
    padding: '1rem'
  },
  '& h1,& h2': {
    lineHeight: 1,
    marginTop: 0,
    marginBottom: '.5rem'
  },
  ' h1': {
    fontSize: '1.3rem'
  },
  ' h2': {
    fontWeight: 400,
    fontSize: '1rem',
    fontStyle: 'italic'
  },
  ' p': {
    fontWeight: 400
  }
});
