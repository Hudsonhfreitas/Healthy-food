import * as S from './styles'

import { BlogSliderItem } from './BlogSliderItem'
import SliderBlog from './SliderBlog'

import blogImg_1 from '../../assets/blog_image_1.svg';
import blogImg_2 from '../../assets/blog_image_2.svg';
import blogImg_3 from '../../assets/blog_image_3.svg';
import blogImg_4 from '../../assets/blog_image_4.svg';
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import avatar4 from '../../assets/avatar4.svg';

export function BlogSection() {
    return (
        <S.Container>
            <S.Content>
                <h2>Read Our Blog</h2>
                <p>Far far away, behind the word mountains,  far from the countries <br/>
                 Vokalia and Consonantia, there live the blind texts.</p>
                    <SliderBlog>
                        <BlogSliderItem
                            image={blogImg_1}
                            title='Quick-start guide to nuts and seeds'
                            user='Kevin Ibrahim'
                            userImage={avatar1}
                        />
                        <BlogSliderItem
                            image={blogImg_2}
                            title='Nutrition: Tips for Improving Your Health'
                            user='Mike Jackson'
                            userImage={avatar2}
                        />
                        <BlogSliderItem
                            image={blogImg_3}
                            title='The top 10 benefits of eating healthy'
                            user='Bryan McGregor'
                            userImage={avatar3}
                        />
                        <BlogSliderItem
                            image={blogImg_4}
                            title='What Makes a Healthy Diet?'
                            user='Joshua'
                            userImage={avatar4}
                        />
                    </SliderBlog>
            </S.Content>
        </S.Container>
    )
}