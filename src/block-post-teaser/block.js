/**
 * BLOCK: Post Select
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.

import './style.scss';
import './editor.scss';
import apiFetch from '@wordpress/api-fetch';

const { __ } = wp.i18n; 
const { registerBlockType, InspectorControls } = wp.blocks; 
const { SelectControl } = wp.components;
const { Component } = wp.element


class selectPosts extends Component {
	static getInitialState(selectedPost) {
		return {
			posts:[],
			selectedPost: selectedPost,
			post: {}
		}
	}
	
	onChangeSelectPost(value) {
		const post = this.state.posts.find((item) => {
			return item.id == parseInt(value)
		})
		
		this.setState ({selectedPost: parseInt(value), post})
		
		this.props.setAttributes({
			selectedPost: parseInt(value),
			title: post.title.rendered,
			content: post.excerpt.rendered,
			link: post.link
		})
	}
	
	getOptions() {
		return (
			apiFetch({ path: '/wp-json/wp/v2/posts' } ).then((posts) => {
			if(posts && 0 !== this.state.selectedPost) {
				const post = posts.find((item) => {
					return item.id == this.state.selectedPost;
				})
				this.setState({post, posts});
			} else {
				this.setState(posts);
			}
		});
	}
	
	constructor() {
		super(...arguments);
		this.state = this.constructor.getInitialState(this.props.attributes.selectedPost)
		this.getOptions = this.getOptions.bind(this);
		this.getOptions();
		
		this.onChangeSelectPost = this.onChangeSelectPost.bind(this);
	};
	
	render() {
		let options = [{value:0, label: __('Select a post')}];
		let output = __('Loading posts');
		this.props.className += ' loading';
		if (this.state.posts.length > 0) {
			
		} else {
			output = __('No posts found in the system');
		}
		if(this.state.post.hasOwnProperty('title')) {
			output = <div className="post">
				<a href="">
					<p dangerouslySetInnerHTML={{__html: this.state.post.excerpt.rendered}}></p>
				</a>
			</div>;
			this.props.className += ' has-post';
		} else {
			this.props.className += ' no-post';
		}
		if (this.state.posts.forEach((post) => {
			options.push({
				value:post.id, 
				label:post.title.rendered
			});
		}));
		return [
			!! this.props.isSelected && (
				<InspectorControls key='inspector'>
					<SelectControl value={this.props.attributes.selectedPost}
									label={__('Select a Post')} 
									options={options} />
				</InspectorControls>
			),
			<div className={this.props.className}>{output}</div>
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
			type: 'array',
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
	
	save: function(props) {
		return (
			<div className={props.className}>
				<div className="post">
					<a href={props.attributes.link}>
						<h2 dangerouslySetInnerHTML={{__html:props.attributes.content}}>
							
						</h2>
					</a>
				</div>
			</div>
		)
	}
});
