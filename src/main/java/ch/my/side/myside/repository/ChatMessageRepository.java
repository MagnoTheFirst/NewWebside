package ch.my.side.myside.repository;

import ch.my.side.myside.model.entities.chat.ChatMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@Repository
@EnableJpaRepositories
public interface ChatMessageRepository extends JpaRepository<ChatMessage, Long> {

}
