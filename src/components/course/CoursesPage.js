import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
    constructor (props, context){
        super(props, context);
        this.state={course:{title: ""}};
    }

    onTitleChange (event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave() {
        this.props.createCourse(this.state.course);
    }

    courseRow (course, index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>add course </h2>
                <input type="text" onChange={this.onTitleChange.bind(this)} value={this.state.course.title} />
                <input type="submit" value="Save" onClick={this.onClickSave.bind(this)} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    dispatch: PropTypes.func.isRequired, 
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps (dispatch){
    return {
        createCourse: (course) => dispatch(courseActions.createCourse())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
 