
import logoDotz from '../assets/dotz_logo.jpg'
import logoCompasso from '../assets/compasso.jpg'
import logoNetshoes from '../assets/netshoes.jpg'
import 'react-vertical-timeline-component/style.min.css';
import Badge from "./Badge";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

function Experiences() {
    return (

        <div className='mt-[80px] md:mt-50'>
            <div className='text-center mb-10'>
                <h2 className='text-secondary font-bold text-5xl'>Minhas Experiências</h2>
            </div>

            <div>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white "
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2021 - até o momento"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoDotz} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title font-medium">Advisor</h3>
                            </div>
                            <span className="block font-normal my-3">
                                A <span className='font-medium'>Atento</span> Responsável pelo suporte aos clientes via: call, e-mail e chat do banco digital MovilePay
                                voltado para Parceiros iFood, orientando sobre utilização de conta corrente e App.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Angular' />
                                <Badge text='Prismic' />
                                <Badge text='Metodologias Ágeis' />
                                <Badge text='Scrum' />
                                <Badge text='Kanban' />
                                
                            </div>

                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white "
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2018 - 2021"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoCompasso} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title  font-medium">Agente de Relacionamento</h3>
                            </div>
                            <span className="block font-normal my-3">
                                A <span className='font-medium'>Netshoes</span>  Responsável pelo suporte aos clientes via: call, e-mail e chat de loja de E-commerce de artigos
                                esportivos e moda voltado para clientes da Netshoes e Zattini.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Knockout js' />
                                <Badge text='Kanban' />
                                <Badge text='AWS' />
                                <Badge text='Azure' />
                              
                            </div>

                        </div>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white "
                        contentStyle={{ background: '#fff', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        date="2012 - 2018"
                        iconStyle={{
                            background: 'linear-gradient(to right, #E70FAA, #00C0FD)',
                            color: '#fff',
                        }}
                        icon={<s />}
                    >
                        <div className="text-primary">
                            <div className="flex items-center gap-4">
                                <img className="max-w-[48px]" src={logoNetshoes} alt="Dotz" />
                                <h3 className="vertical-timeline-element-title  font-medium">Advisor</h3>
                            </div>
                            <span className="block font-normal my-3">
                                A <span className='font-medium'>Porto Seguro</span> Responsável pelo suporte aos clientes via: call, e-mail e chat a nível nacional de um banco
                                digital (Startup) orientando sobre utilização de cartões de crédito e conta corrente.
                            </span>

                            <div className="flex items-center flex-wrap gap-[10px]">
                                <span className="block font-medium">Tecnologias:</span>
                                <Badge text='Oracle ATG' />
                                <Badge text='Freedom' />
                                <Badge text='Kanban' />
                                <Badge text='AWS' />
                               

                            </div>

                        </div>
                    </VerticalTimelineElement>


                </VerticalTimeline>
            </div>

        </div>

    );
}

export default Experiences; 