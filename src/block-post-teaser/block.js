/**
 * BLOCK: test-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.

import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; 
const { registerBlockType, InspectorControls } = wp.blocks; 
const {SelectControl} = wp.components;
const {Component} = wp.element

class selectPosts extends Component {
	static getInitialState(selectedPost) {
		return {
			posts:[],
			selectedPost: selectedPost,
			post: {}
		}
	}
	
	getOptions() {
		return (new wp.api.collections.Posts()).fetch().then((posts) => {
			if(posts && 0 !== this.state.selectedPost) {
				const post = posts.find((item) => {
					return item.id == this.state.selectedPost;
				})
				this.setState({post, posts});
			} else {
				this.setState(posts);
			}
		})
	}
	
	constructor() {
		super(...arguments);
		this.state = this.constructor.getInitialState(this.props.attributes.selectedPost)
		this.getOptions = this.getOptions.bind(this);
		this.getOptions();
	}
	
	render() {
		let options = [{value:0, label: __('Select a post')}];
		let output = __('Loading post');
		if (this.state.posts.forEach((post) => {
			options.push({
				value:post.id, 
				label:post.title.rendered
			})
		}))
		return [
			!! this.props.isSelected && (
				<InspectorControls key='inspector'>
					<SelectControl value={this.props.attributes.selectedPost}
									label={__('Select a Post')} 
									options={options} />
				</InspectorControls>
			)
		]
	}
}

 
registerBlockType( 'ash/post-teaser', {
	title: __( 'Post Teaser' ),
	icon: 'shield', 
	category: 'common', 
	keywords: [
		__( 'Post teasers' )
	],
	
	edit: selectPosts,
	
	attributes: {
		content: {
			type: array,
			source: 'children',
			selector: 'p'
		},
		title: {
			type: 'string',
			selector: "h2"
		},
		link: {
			type: 'string',
			selector: 'a'
		},
		selectedPosts: {
			type:'number',
			default:0
		}
	},
	 
} );
