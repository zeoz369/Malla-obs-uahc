document.addEventListener('DOMContentLoaded', function() {
    const courses = document.querySelectorAll('.course');
    const resetBtn = document.getElementById('reset-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const totalCourses = courses.length;
    let completedCourses = 0;

    // Inicializar el estado de los cursos
    function initializeCourses() {
        completedCourses = 0;
        
        courses.forEach(course => {
            // Verificar si el curso está completado en localStorage
            const isCompleted = localStorage.getItem(course.dataset.id) === 'completed';
            
            if (isCompleted) {
                course.classList.add('completed');
                completedCourses++;
                
                // Desbloquear cursos que este curso desbloquea
                const unlocks = course.dataset.unlocks;
                if (unlocks) {
                    unlocks.split(' ').forEach(id => {
                        const unlockedCourse = document.querySelector(`[data-id="${id}"]`);
                        if (unlockedCourse) {
                            unlockedCourse.classList.remove('locked');
                        }
                    });
                }
            } else {
                course.classList.remove('completed');
            }
            
            // Verificar requisitos para bloquear/desbloquear
            const requires = course.dataset.requires;
            if (requires) {
                const requiredCourses = requires.split(' ');
                const allRequiredCompleted = requiredCourses.every(id => {
                    const requiredCourse = document.querySelector(`[data-id="${id}"]`);
                    return requiredCourse && requiredCourse.classList.contains('completed');
                });
                
                if (!allRequiredCompleted && !course.classList.contains('completed')) {
                    course.classList.add('locked');
                } else {
                    course.classList.remove('locked');
                }
            }
        });
        
        updateProgress();
    }

    // Actualizar la barra de progreso
    function updateProgress() {
        const percentage = Math.round((completedCourses / totalCourses) * 100);
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% completado`;
    }

    // Manejar clic en un curso
    function handleCourseClick(e) {
        const course = e.currentTarget;
        
        if (course.classList.contains('locked')) return;
        
        if (course.classList.contains('completed')) {
            course.classList.remove('completed');
            localStorage.removeItem(course.dataset.id);
            completedCourses--;
        } else {
            course.classList.add('completed');
            localStorage.setItem(course.dataset.id, 'completed');
            completedCourses++;
            
            // Desbloquear cursos que este curso desbloquea
            const unlocks = course.dataset.unlocks;
            if (unlocks) {
                unlocks.split(' ').forEach(id => {
                    const unlockedCourse = document.querySelector(`[data-id="${id}"]`);
                    if (unlockedCourse) {
                        unlockedCourse.classList.remove('locked');
                    }
                });
            }
        }
        
        // Actualizar estado de cursos dependientes
        courses.forEach(c => {
            const requires = c.dataset.requires;
            if (requires) {
                const requiredCourses = requires.split(' ');
                const allRequiredCompleted = requiredCourses.every(id => {
                    const requiredCourse = document.querySelector(`[data-id="${id}"]`);
                    return requiredCourse && requiredCourse.classList.contains('completed');
                });
                
                if (!allRequiredCompleted && !c.classList.contains('completed')) {
                    c.classList.add('locked');
                } else {
                    c.classList.remove('locked');
                }
            }
        });
        
        updateProgress();
    }

    // Reiniciar toda la malla
    function resetMalla() {
        if (confirm('¿Estás seguro de que quieres reiniciar toda la malla? Se borrarán todos tus avances.')) {
            courses.forEach(course => {
                course.classList.remove('completed');
                localStorage.removeItem(course.dataset.id);
            });
            initializeCourses();
        }
    }

    // Event listeners
    courses.forEach(course => {
        course.addEventListener('click', handleCourseClick);
    });
    
    resetBtn.addEventListener('click', resetMalla);

    // Inicializar
    initializeCourses();
});
