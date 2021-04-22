import React from 'react';
import {
    FeaturesContainer,
    FeaturesWrap,
    FeaturesContent,
    IconWrap,
    InboxIcon,
    H4,
    HeaderDesc,
    ReadMore
} from './ComponentElements';
import bell from '../assets/bell.svg'
import plane from '../assets/airplane.svg'
import bar from '../assets/bar-chart.svg'

const Features = () => {
    return (
        <FeaturesContainer>
            <FeaturesWrap>
                <FeaturesContent>
                    <IconWrap>
                        <InboxIcon>
                            <img src={bell} alt=""/>
                        </InboxIcon>
                        <H4>Notification</H4>
                        <HeaderDesc>
                        Get notified whenever there is an upgrade and with our seamless configuration, we would get you updated in no time
                        </HeaderDesc>
                        <ReadMore>Read</ReadMore>
                    </IconWrap>
                </FeaturesContent>
                <FeaturesContent>
                    <IconWrap>
                        <InboxIcon>
                            <img src={plane} alt=""/>
                        </InboxIcon>
                        <H4>All-in-one-setup</H4>
                        <HeaderDesc>
                        Get started in no time and this time with all the features we offer in growing your business all at once.
                        </HeaderDesc>
                        <ReadMore>Read</ReadMore>
                    </IconWrap>
                </FeaturesContent>
                <FeaturesContent>
                    <IconWrap>
                        <InboxIcon>
                            <img src={bar} alt=""/>
                        </InboxIcon>
                        <H4>Statistic</H4>
                        <HeaderDesc>
                        Get statistics of all the business around you in
                        </HeaderDesc>
                        <ReadMore>Read</ReadMore>
                    </IconWrap>
                </FeaturesContent>
            </FeaturesWrap>
        </FeaturesContainer>
    )
}

export default Features
