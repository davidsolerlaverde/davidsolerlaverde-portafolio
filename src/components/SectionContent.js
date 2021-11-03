import React from 'react';
import _ from 'lodash';

import { htmlToReact, withPrefix, markdownify } from '../utils';

export default class SectionContent extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const image = _.get(section, 'image');
        const imageAlt = _.get(section, 'image_alt', '');
        const content = _.get(section, 'content');

        return (
            <section id={sectionId} className="block block-text outer">
                <div className="inner">
                    {(title || subtitle) && (
                        <div className="block-header inner-sm">
                            {title && <h2 className="block-title line-top">{title}</h2>}
                            {subtitle && <p className="block-subtitle">{htmlToReact(subtitle)}</p>}
                        </div>
                    )}
                    {image && (
                        <div className="block-image">
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    {content && <div className="block-content inner-sm">{markdownify(content)}</div>}
                    <!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/davidsolerlaverde/comopuedoayudarte" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->
                </div>
            </section>
        );
    }
}
