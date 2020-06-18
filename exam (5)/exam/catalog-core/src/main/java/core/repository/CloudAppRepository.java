package core.repository;

import core.model.BaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.transaction.annotation.Transactional;

import java.io.Serializable;

@Transactional
@NoRepositoryBean
public interface CloudAppRepository<E extends BaseEntity<T>, T extends Serializable> extends JpaRepository<E,T>{
}
